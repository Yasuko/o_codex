// import Library
import { DragService } from '../../../_lib/drag/drag.service'
import { FileService } from '../../../_lib/drag/file.service'
import { ImageHelper } from '../../../_lib/image/helper/image.helper'
import { arrayBufferToBase64url } from '../../../_lib/_helper/convert.helper'
export class FileHelper {
    private static instance: FileHelper

    private file: any = []
    private fileType: 'image' | 'pdf' = 'image'

    public constructor() {
        return this
    }

    public static call(): FileHelper {
        if (!FileHelper.instance) {
            FileHelper.instance = new FileHelper()
        }
        return FileHelper.instance
    }

    public getFile(): any {
        const im = this.file.map((f: any) => {
            return f.image
        })
        return im
    }

    public getDataFile(): any {
        return this.file
    }

    public getFileType(): 'image' | 'pdf' {
        return this.fileType
    }

    public getImages(): any {
        return this.file
    }

    public async dragStart(target = 'dragtarget'): Promise<FileHelper> {
        await DragService.call().setTarget(target)
        return this
    }

    public async dragEnd(e: any): Promise<FileHelper> {
        await DragService.call().setReadMode('arrayBuffer').onDrop(e)
        //await DragService.call().setReadMode('dataURL').onDrop(e)
        this.file = DragService.call().getImage()
        if (this.file.length === 0) {
            this.file = DragService.call().getFile()
        }
        return this
    }

    public async changeFileFormat(): Promise<FileHelper> {
        for (let i = 0; i < this.file.length; i++) {
            this.file[i].data = arrayBufferToBase64url(this.file[i].data)
        }
        return this
    }

    public async selectFile(e:any): Promise<FileHelper> {
        await FileService.call().setFile(e, 'select')
        this.file = await FileService.call().getAllImage()
        return this
    }

    public async toImageElement(image: string): Promise<HTMLImageElement> {
        await ImageHelper.call().setImage(image)
        return ImageHelper.call().getImageForElement()
    }
}

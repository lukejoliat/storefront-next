import Image from "next/image"

export const ProductPhotos = ({ handleClick, photos }: any) => {
    return (
        <div className="flex flex-col p-3">
            {
                photos.map((p: string, i: number) => {
                    return (
                        <div className="h-20 w-20 bg-slate-900 rounded-md my-2" key={`photo-${i}`}>
                            <Image
                                src={p}
                                alt="product 1"
                                width={200}
                                height={200}
                                onClick={() => handleClick(p)}
                                className="cursor-pointer"
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
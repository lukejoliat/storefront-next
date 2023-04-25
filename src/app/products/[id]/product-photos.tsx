import clsx from "clsx"
import Image from "next/image"

type Props = {
    handleClick: (p: string) => void;
    photos: string[];
    direction?: 'vertical' | 'horizontal';
    className?: string;
}

export const ProductPhotos = ({ handleClick, photos, direction = 'vertical', className }: Props) => {
    return (
        <div className={clsx('flex p-3', className, direction === 'horizontal' ? 'flex-row' : 'flex-col')}>
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
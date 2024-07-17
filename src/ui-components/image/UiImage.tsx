import Image from 'next/image';
import { UiImageProps } from './types';

const UiImage = (props: UiImageProps) => {
  const { src, height, width, alt, fill, priority } = props;
  return(
    <Image src={src} width={width} height={height} alt={alt} fill={fill} priority={priority} />
  )
};

export default UiImage;

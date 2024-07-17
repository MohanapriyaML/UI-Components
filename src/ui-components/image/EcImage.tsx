import Image from 'next/image';
import { EcImageProps } from './types';

const EcImage = (props: EcImageProps) => {
  const { src, height, width, alt, fill, priority } = props;
  return(
    <Image src={src} width={width} height={height} alt={alt} fill={fill} priority={priority} />
  )
};

export default EcImage;

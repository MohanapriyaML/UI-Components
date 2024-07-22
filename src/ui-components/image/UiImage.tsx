import { UiImageProps } from './types';

const UiImage = (props: UiImageProps) => {
  const { src, height, width, alt} = props;
  return(
    <img src={src} width={width} height={height} alt={alt} />
  )
};

export default UiImage;

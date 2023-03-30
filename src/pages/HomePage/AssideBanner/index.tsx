import bannerHome from "./../../../assets/banner-home.svg";
import { AsideBannerContainer, AsideBannerOverlay } from "./styles";

export const AssideBanner = () => {
  return (
    <AsideBannerContainer>
      <AsideBannerOverlay />
      <img
        src={bannerHome}
        alt="Pessoas em volta de uma fogueira se conhecendo, Ziti"
      />
    </AsideBannerContainer>
  );
};

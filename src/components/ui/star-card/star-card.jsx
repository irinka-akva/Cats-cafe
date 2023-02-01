import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { Text, Figure, Image, StyledStarCard, StyledStarIcon } from "./styles";

// Карточка кота
function StarCard({
  name, // имя кота
  about, // информация о коте
  feature, // особенность (ласковый, новенький и т.д.) CatFeature
  image // url c фото кота)
}) {
  return (
    <StyledStarCard>
      <Figure>
        <Image src={image} width={313} height={320} alt="изображение кота" />
        <StyledStarIcon feature={feature}></StyledStarIcon>
      </Figure>
      <Title size={TitleSize.SMALL} level={TitleLevel.H3}>
        {name}
      </Title>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </StyledStarCard>
  );
}

export default StarCard;

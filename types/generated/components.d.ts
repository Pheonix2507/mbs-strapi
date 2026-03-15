import type { Schema, Struct } from '@strapi/strapi';

export interface ALegacyOfTransformationALegacyOfTransformation
  extends Struct.ComponentSchema {
  collectionName: 'components_a_legacy_of_transformation_a_legacy_of_transformation_s';
  info: {
    displayName: 'A Legacy of Transformation.';
  };
  attributes: {
    title: Schema.Attribute.String;
    yearAndtext: Schema.Attribute.Component<
      'title-subtile.title-subtitle',
      true
    >;
  };
}

export interface CoreValueComponentCoreValueComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_core_value_component_core_value_components';
  info: {
    displayName: 'core_value_component';
  };
  attributes: {
    icons: Schema.Attribute.Component<'icons.icon', true>;
    title: Schema.Attribute.String;
  };
}

export interface CtaButtonButton extends Struct.ComponentSchema {
  collectionName: 'components_cta_button_button_s';
  info: {
    displayName: 'button ';
  };
  attributes: {
    redirect_link: Schema.Attribute.String;
    text: Schema.Attribute.String;
    visible: Schema.Attribute.Boolean;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    quick_links: Schema.Attribute.Component<'title.title', true>;
    services: Schema.Attribute.Component<'title.title', true>;
    social_links: Schema.Attribute.Component<'social-links.social-links', true>;
    Solutions: Schema.Attribute.Component<'title.title', true>;
  };
}

export interface IconsIcon extends Struct.ComponentSchema {
  collectionName: 'components_icons_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    text: Schema.Attribute.String;
  };
}

export interface ImpactCountImpactNo extends Struct.ComponentSchema {
  collectionName: 'components_impact_count_impact_nos';
  info: {
    displayName: 'Impact_no';
  };
  attributes: {
    numbers: Schema.Attribute.Component<'number.number', true>;
    title: Schema.Attribute.String;
  };
}

export interface NumberGrowthNumberGrowth extends Struct.ComponentSchema {
  collectionName: 'components_number_growth_number_growth_s';
  info: {
    displayName: 'number_growth ';
  };
  attributes: {
    description: Schema.Attribute.String;
    number: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface NumberNumber extends Struct.ComponentSchema {
  collectionName: 'components_number_number_s';
  info: {
    displayName: 'number ';
  };
  attributes: {
    number: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface PillarPillar extends Struct.ComponentSchema {
  collectionName: 'components_pillar_pillars';
  info: {
    displayName: 'pillar';
  };
  attributes: {
    pillar_element: Schema.Attribute.Component<'pillar.pillar-elemetn', true>;
    title: Schema.Attribute.String;
  };
}

export interface PillarPillarElemetn extends Struct.ComponentSchema {
  collectionName: 'components_pillar_pillar_elemetns';
  info: {
    displayName: 'pillar_elemetn';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
    title_subtile: Schema.Attribute.Component<
      'title-subtile.title-subtitle',
      true
    >;
  };
}

export interface ProgressSectionProgressSection extends Struct.ComponentSchema {
  collectionName: 'components_progress_section_progress_sections';
  info: {
    displayName: 'progress_section';
  };
  attributes: {
    title: Schema.Attribute.String;
    title_subtile_image: Schema.Attribute.Component<
      'title-subtile-button-image.title-subtitle-button-image',
      true
    >;
  };
}

export interface SectionHero extends Struct.ComponentSchema {
  collectionName: 'components_section_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    button: Schema.Attribute.Component<'cta-button.button', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SocialLinksSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_links_social_links';
  info: {
    displayName: 'social links';
  };
  attributes: {
    social_icons: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    social_links: Schema.Attribute.String;
  };
}

export interface StrategicBusinessOutcomesStrategicBusinessOutcomes
  extends Struct.ComponentSchema {
  collectionName: 'components_strategic_business_outcomes_strategic_business_outcomes';
  info: {
    displayName: 'Strategic Business Outcomes';
  };
  attributes: {
    card: Schema.Attribute.Component<
      'title-subtile-button-image.title-subtitle-button-image',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SwipeSwipe extends Struct.ComponentSchema {
  collectionName: 'components_swipe_swipes';
  info: {
    displayName: 'swipe';
  };
  attributes: {
    title_subtile: Schema.Attribute.Component<
      'title-subtile.title-subtitle',
      false
    >;
  };
}

export interface TechnicalCompetenciesTechnicalCompetencies
  extends Struct.ComponentSchema {
  collectionName: 'components_technical_competencies_technical_competencies';
  info: {
    displayName: 'Technical_Competencies';
  };
  attributes: {
    button: Schema.Attribute.Component<'cta-button.button', true>;
    side_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
    title_subtile: Schema.Attribute.Component<
      'title-subtile.title-subtitle',
      true
    >;
  };
}

export interface TitleSubtileButtonImageTitleSubtitleButtonImage
  extends Struct.ComponentSchema {
  collectionName: 'components_title_subtile_button_image_title_subtitle_button_images';
  info: {
    displayName: 'title_subtitle_button_image';
  };
  attributes: {
    button: Schema.Attribute.Component<'cta-button.button', false>;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface TitleSubtileSwipeElement extends Struct.ComponentSchema {
  collectionName: 'components_title_subtile_swipe_elements';
  info: {
    displayName: 'swipe_element';
  };
  attributes: {
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface TitleSubtileTitleSubtitle extends Struct.ComponentSchema {
  collectionName: 'components_title_subtile_title_subtitles';
  info: {
    displayName: 'title_subtitle';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    sub_title: Schema.Attribute.String;
    swipe_element: Schema.Attribute.Component<
      'title-subtile.swipe-element',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface TitleTitle extends Struct.ComponentSchema {
  collectionName: 'components_title_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'a-legacy-of-transformation.a-legacy-of-transformation': ALegacyOfTransformationALegacyOfTransformation;
      'core-value-component.core-value-component': CoreValueComponentCoreValueComponent;
      'cta-button.button': CtaButtonButton;
      'footer.footer': FooterFooter;
      'icons.icon': IconsIcon;
      'impact-count.impact-no': ImpactCountImpactNo;
      'number-growth.number-growth': NumberGrowthNumberGrowth;
      'number.number': NumberNumber;
      'pillar.pillar': PillarPillar;
      'pillar.pillar-elemetn': PillarPillarElemetn;
      'progress-section.progress-section': ProgressSectionProgressSection;
      'section.hero': SectionHero;
      'social-links.social-links': SocialLinksSocialLinks;
      'strategic-business-outcomes.strategic-business-outcomes': StrategicBusinessOutcomesStrategicBusinessOutcomes;
      'swipe.swipe': SwipeSwipe;
      'technical-competencies.technical-competencies': TechnicalCompetenciesTechnicalCompetencies;
      'title-subtile-button-image.title-subtitle-button-image': TitleSubtileButtonImageTitleSubtitleButtonImage;
      'title-subtile.swipe-element': TitleSubtileSwipeElement;
      'title-subtile.title-subtitle': TitleSubtileTitleSubtitle;
      'title.title': TitleTitle;
    }
  }
}

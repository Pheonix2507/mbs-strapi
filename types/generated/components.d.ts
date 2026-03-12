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

export interface CtaButtonButton extends Struct.ComponentSchema {
  collectionName: 'components_cta_button_button_s';
  info: {
    displayName: 'button ';
  };
  attributes: {
    contact_us: Schema.Attribute.Relation<'oneToOne', 'api::blog.blog'>;
    text: Schema.Attribute.String;
    visible: Schema.Attribute.Boolean;
  };
}

export interface ImpactCountImpactNo extends Struct.ComponentSchema {
  collectionName: 'components_impact_count_impact_nos';
  info: {
    displayName: 'Impact_no';
  };
  attributes: {
    numbers: Schema.Attribute.Component<'number.number', true>;
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
    button: Schema.Attribute.Component<'cta-button.button', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface TitleSubtileTitleSubtitle extends Struct.ComponentSchema {
  collectionName: 'components_title_subtile_title_subtitles';
  info: {
    displayName: 'title_subtitle';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'a-legacy-of-transformation.a-legacy-of-transformation': ALegacyOfTransformationALegacyOfTransformation;
      'cta-button.button': CtaButtonButton;
      'impact-count.impact-no': ImpactCountImpactNo;
      'number.number': NumberNumber;
      'pillar.pillar': PillarPillar;
      'pillar.pillar-elemetn': PillarPillarElemetn;
      'progress-section.progress-section': ProgressSectionProgressSection;
      'section.hero': SectionHero;
      'title-subtile-button-image.title-subtitle-button-image': TitleSubtileButtonImageTitleSubtitleButtonImage;
      'title-subtile.title-subtitle': TitleSubtileTitleSubtitle;
    }
  }
}

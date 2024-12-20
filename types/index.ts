export type LaneType =
| 'bidirectionnelle'
| 'bilaterale'
| 'voie-bus'
| 'voie-bus-elargie'
| 'velorue'
| 'voie-verte'
| 'bandes-cyclables'
| 'zone-de-rencontre'
| 'amgt-mixte-pieton-velo'
| 'zone-30'
| 'aucun'
| 'inconnu';

export type LaneStatus = 'done' | 'wip' | 'planned' | 'postponed' | 'unknown' | 'variante' | 'variante-postponed';

export type LineStringFeature = {
  type: 'Feature';
  geometry: {
    type: 'LineString';
    coordinates: [number, number][];
  };
  properties: {
    id?: string;
    line: number;
    name: string;
    status: LaneStatus;
    type: LaneType;
    doneAt?: string;
    link?: string;
  };
};

export type PerspectiveFeature = {
  type: 'Feature';
  properties: {
    type: 'perspective';
    line: number;
    name: string;
    imgUrl: string;
  };
  geometry: {
    type: 'Point';
    coordinates: [number, number];
  };
};

export type CompteurFeature = {
  type: 'Feature';
  properties: {
    type: 'compteur-velo' | 'compteur-voiture',
    line: number;
    name: string;
    link?: string;
    counts: Array<{
      month: string;
      count: number;
    }>;
    /**
     * z-index like
     */
    circleSortKey?: number;
    circleRadius?: number;
    circleStrokeWidth?: number;
  };
  geometry: {
    type: 'Point';
    coordinates: [number, number];
  };
};
type PointFeature = PerspectiveFeature | CompteurFeature;

export type Feature = LineStringFeature | PointFeature;

export type Geojson = {
  type: string;
  features: Feature[];
};

/**
 * type helpers
 */
export function isLineStringFeature(feature: Feature): feature is LineStringFeature {
  return feature.geometry.type === 'LineString';
}

export function isPointFeature(feature: Feature): feature is PointFeature {
  return feature.geometry.type === 'Point';
}

export function isPerspectiveFeature(feature: Feature): feature is PerspectiveFeature {
  return isPointFeature(feature) && feature.properties.type === 'perspective';
}


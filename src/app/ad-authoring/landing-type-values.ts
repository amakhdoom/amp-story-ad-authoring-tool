export enum LandingTypeEnum {
    STORY = "STORY",
    AMP = "AMP",
    NONAMP = "NONAMP"
}

export const LandingTypeMapping: Record<LandingTypeEnum, string> = {
    [LandingTypeEnum.STORY]: 'Story',
    [LandingTypeEnum.AMP]: 'AMP',
    [LandingTypeEnum.NONAMP]: 'Non-AMP'
} as const;

function landingTypeComparator (landingType1: LandingTypeEnum, landingType2: LandingTypeEnum) {
    if (landingType1 < landingType2) return -1;
    if (landingType1 > landingType2) return 1;
    return 0;
}

export const sortedLandingType = Object.keys(LandingTypeEnum).sort(landingTypeComparator);
console.log(sortedLandingType);

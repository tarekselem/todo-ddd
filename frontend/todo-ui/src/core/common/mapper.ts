export interface IMapperIn<TDTO, TDomain> {
  singleToDomain(source: Readonly<TDTO>): TDomain;
  collectionToDomain(source: ReadonlyArray<TDTO>): TDomain[];
}

export interface IMapperOut<TDTO, TDomain> {
  toDTO(source: TDomain): TDTO;
}

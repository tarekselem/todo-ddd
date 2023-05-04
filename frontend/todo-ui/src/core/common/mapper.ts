export interface IMapperIn<TDTO, TDomain> {
  toDomain(source: TDTO): TDomain;
}

export interface IMapperOut<TDTO, TDomain> {
  toDTO(source: TDomain): TDTO;
}

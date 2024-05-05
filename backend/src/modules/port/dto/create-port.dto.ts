class CreatePortDto {
  // id: number;
  name: string;
  location: string;
  hydrographic_chart: string;
  river_area?: number;
  land_area?: number;
}

export { CreatePortDto };

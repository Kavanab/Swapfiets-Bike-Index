export interface Bike {
    additional_registration?: string;
    api_url?: string;
    components?: string[];
    date_stolen?: number;
    description?: string;
    external_id?: string;
    extra_registration_number?: string;
    frame_colors?: string[];
    frame_material_slug?: string;
    frame_model?: string;
    frame_size?: string;
    front_gear_type_slug?: string;
    front_tire_narrow?: string;
    front_wheel_size_iso_bsd?: string;
    handlebar_type_slug?: string;
    id: number;
    is_stock_img: boolean;
    large_img?: string;
    location_found?: string;
    manufacturer_id: number;
    manufacturer_name?: string;
    name?: string;
    paint_description?: string;
    public_images?: string[];
    rear_gear_type_slug?: string;
    rear_tire_narrow: boolean;
    rear_wheel_size_iso_bsd?: string;
    registration_created_at: number;
    registration_updated_at: number;
    registry_name?: string;
    registry_url?: string;
    serial?: string;
    status?: string;
    stolen: boolean;
    stolen_coordinates?: number[];
    stolen_location?: string;
    stolen_record?: string;
    test_bike: boolean;
    thumb?: string;
    title: string;
    type_of_cycle?: string;
    url: string;
    year?: number;
}

export interface BikeCount {
    "non": number;
    "stolen": number;
    "proximity": number;
}
export interface grocery {
    title: string;
    image: string;
    path: string;
    description: string;
    price: number;
}

export interface category {
    title: string;
    image: string;
    path: string;
    items: grocery[];
}
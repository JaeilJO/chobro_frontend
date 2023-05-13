export interface HeadItemType {
    id: number;
    title: string;
    text_align?: 'left' | 'center' | 'right';
    column_sorting?: boolean;
}

export interface TableBodyRowProps {
    url: string;
    certificate: string;
    expiration_date: string;
    is_active: boolean;
    cert_id: string;
    created_at: string;
    updated_at: string;
}

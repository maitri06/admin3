export class product_cat {
    public constructor(public pk_pro_id: number,
        public pro_name: string,
        public pro_price: number,
        public pro_color: string,
        public pro_img1: string,
        public pro_img2: string,
        public pro_img3: string,
        public pro_desci: string,
        public fk_cat_id: number,
        public pk_cat_id: number,
        public cat_name: string
    ) { }
}
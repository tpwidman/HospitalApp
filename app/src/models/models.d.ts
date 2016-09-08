declare module models {
    interface IPost {
        id?: number;
        image: string;
        title: string;
        content: string;
        author: string;
        mail?: string;
    }
    interface IHospital{
        id?: number;
        name: string;
        distance: number;
        expertise: number;
        cost: number;
        address: string;
        phone: string;
    }
}

import {useRouter} from "next/router";

export default function Post() {
    const router = useRouter();
    return (
        <p>sample post Post: {router.query.slug}</p>
    );
}
import { MainLayout } from '../../components/layouts/MainLayout';
import styles from '../../styles/Home.module.css';

export default function ContactPage() {
    return (
        <>
            <h1>Contact</h1>
            <h1 className={styles.title}>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                {/* Ir a <Link href="/">Home</Link> */}
            </h1>
        </>
    );
}

ContactPage.getLayout = function getLayout(page: JSX.Element) {
    return <MainLayout>{page}</MainLayout>;
};

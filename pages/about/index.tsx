import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';

export default function About() {
    return (
        <>
            <h1>About</h1>
            <h1 className={styles.title}>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                Ir a <Link href="/">Home</Link>
            </h1>
        </>
    );
}

About.getLayout = function getLayout(page: JSX.Element) {
    return <MainLayout>{page}</MainLayout>;
};

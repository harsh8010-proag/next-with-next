import { Inter } from 'next/font/google';
import { Black_Ops_One, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });


export const blackOps = Black_Ops_One({
    subsets: ['latin'],
    weight: '400', // this font only has one weight
    variable: '--karan',
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});



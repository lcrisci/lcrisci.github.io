import { books } from './books';

interface Interest {
  title: string;
  href?: string;
  note?: string;
}

interface Category {
  id: string;
  title: string;
  items: Interest[];
}

const bookEntries = (category: string): Interest[] =>
  books.filter(book => book.category === category).map(book => ({
    title: book.title,
    href: `/books/${book.slug}/`,
  }));

export const interests: Category[] = [
  { id: 'music', title: 'Music', items: [] },
  { id: 'philosophy', title: 'Philosophy', items: bookEntries('Philosophy') },
  { id: 'books', title: 'Books', items: bookEntries('Books') },
  { id: 'movies', title: 'Movies', items: [] },
  { id: 'anime', title: 'Anime', items: [] },
  { id: 'videogames', title: 'Videogames', items: [] },
  { id: 'computing', title: 'Computing', items: [] },
];

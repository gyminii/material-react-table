import Image from 'next/image';
import { Box, Link, Stack, Typography } from '@mui/material';

interface Props {
  author?: string;
  authorImage?: string;
  authorLink?: string;
  publishDate: string;
}

export const BlogAuthor = ({
  author = 'Kevin Van Cott',
  authorImage = '/contributors/kevinvancott.jpg',
  authorLink = 'https://www.kevinvancott.dev',
  publishDate,
}: Props) => {
  return (
    <Stack>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto 50px',
          gap: '1rem',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: '14pt',
          }}
        >
          By{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={authorLink}
            sx={{
              color: 'text.primary',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            {author}
          </Link>
        </Typography>
        <Image
          alt="author"
          src={authorImage}
          width={30}
          height={30}
          style={{ borderRadius: '50%' }}
        />
      </Box>
      <Typography
        sx={{
          color: 'text.secondary',
        }}
      >
        Published: <i>{new Date(publishDate).toLocaleDateString()}</i>
      </Typography>
    </Stack>
  );
};

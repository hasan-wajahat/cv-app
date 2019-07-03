export const blueScrollBar = () => ({
  scrollbarWidth: 'thin',
  scrollbarColor: '#2d639c white',
  '&::-webkit-scrollbar': {
    width: '6px',
    height: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'white',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#2d639c',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#2d639c',
  },
});

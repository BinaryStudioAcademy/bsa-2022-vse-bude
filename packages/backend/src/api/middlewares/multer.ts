import multer from 'multer';

export const uploadImage = multer().single('file');

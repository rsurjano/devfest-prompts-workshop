import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';

(async () => {
    const files = await imagemin(['**/*.{jpg,png}'], {
        destination: 'optimized',
        plugins: [
            imageminMozjpeg(),
            imageminPngquant(),
            imageminWebp()
        ]
    });

    console.log('Images optimized and converted to WebP format:', files);
})();

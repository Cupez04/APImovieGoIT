import colors from './colors';
import Notiflix from 'notiflix';



export function notiflixSetup() {
    Notiflix.Report.init({
        backOverlay: true,
        fontFamily: 'Quicksand',
        info: {
          svgColor: colors.colorAccentSec,
          titleColor: '#1e1e1e',
          messageColor: '#242424',
          buttonBackground: colors.colorAccentSec,
          buttonColor: '#fff',
          backOverlayColor: 'rgba(255,107,1,0.2)',
        },
      });    
}
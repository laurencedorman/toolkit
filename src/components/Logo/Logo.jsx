import React from 'react';
import styles from './Logo.module.scss';

const Logo = ({ theme, mini }: propTypes) => (
  <svg
    className={`${styles.logo} ${styles[theme]}`}
		width={mini ? '32px' : '139px'}
    height="30px"
		viewBox={mini ? '0 0 32 30' : '0 0 139 30'}
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="17.2641491%" y1="78.4718674%" x2="72.4875789%" y2="30.3997693%" id="linearGradient-1">
        <stop stopColor="#0397A7" offset="0.044188%" />
        <stop stopColor="#00ECCD" offset="99.71%" />
      </linearGradient>
    </defs>
    <g
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd">
      <g>
        <path
          className={styles.hexagone}
          d="M31.4031176,11.1979063 L23.0593493,1.01337089 C22.4521737,0.276204519 21.5120308,-0.072979552 20.5718879,0.0628142532 L7.48823251,2.13851956 C6.54808961,2.29371248 5.76463719,2.91448416 5.4120836,3.80684345 L0.672196471,16.0670842 C0.339229193,16.9594434 0.495919676,17.9487983 1.08350899,18.6859647 L9.42727725,28.8705001 C10.0344529,29.6076664 10.9745958,29.9568505 11.9147387,29.8210567 L24.9983941,27.7453514 C25.938537,27.5901585 26.7219894,26.9693868 27.074543,26.0770275 L31.8144301,13.8167868 C32.1669837,12.9244275 32.0102932,11.9350727 31.4031176,11.1979063 Z"
          fill="url(#linearGradient-1)"
        />
        <polygon
          className={styles.hexagoneLetter}
          fill="#FFFFFF"
          points="19.8090215 9.01522651 16.8749079 14.264586 13.9796568 8.04671 10.3654506 8.99585618 5.896271 20.6180543 9.87967023 20.6180543 12.5806092 13.7609574 15.2232546 20.2887587 17.2635322 20.2887587 21.1886378 13.2960695 21.1886378 22.245162 24.9 20.9860905 24.9 9.92563202"
        />
      </g>
      {!mini &&
      <g className={styles.letters} transform="translate(33.200000, 9.000000)" fill="#ffffff">
        <path d="M43.4014041,4.38191637 C44.4111907,3.42516607 45.634586,2.96592593 47.1104279,2.96592593 C48.5862699,2.96592593 49.8290841,3.42516607 50.8194517,4.38191637 C51.8292383,5.31953166 52.3147126,6.52503704 52.3147126,7.9984325 C52.3147126,9.47182796 51.8098193,10.6773333 50.8194517,11.5958136 C49.8290841,12.5142939 48.6056888,12.9735341 47.1104279,12.9735341 C45.634586,12.9735341 44.3917717,12.5142939 43.4014041,11.5958136 C42.4110365,10.6581983 41.9255622,9.45269295 41.9255622,7.9984325 C41.9255622,6.52503704 42.4304555,5.31953166 43.4014041,4.38191637 Z M47.1298469,10.1798232 C48.2173094,10.1798232 49.1105821,9.31874791 49.1105821,7.9984325 C49.1105821,6.65898208 48.2367283,5.7787718 47.1298469,5.7787718 C46.0423844,5.7787718 45.1491117,6.67811708 45.1491117,7.9984325 C45.1491117,9.31874791 46.0229654,10.1798232 47.1298469,10.1798232 Z M37.6339692,2.98506093 C39.8671511,2.98506093 40.8380997,4.1714313 40.8380997,6.25714695 L40.8380997,12.743914 L37.2261708,12.743914 L37.2261708,7.00341219 C37.2261708,6.410227 37.0125621,6.06579689 36.5465067,6.06579689 C36.1192893,6.06579689 35.2842735,6.21887694 34.7599612,6.58244205 L34.7599612,12.763049 L31.1868703,12.763049 L31.1868703,3.17641099 L34.1385541,3.17641099 L34.3327438,3.90354122 C34.915313,3.5208411 36.2940601,3.02333094 37.3815226,2.98506093 C37.4591985,2.98506093 37.5562933,2.98506093 37.6339692,2.98506093 Z M14.1952691,1.09069534 L19.3801348,1.99004062 L19.3801348,13.0118041 L15.5934351,14.2747145 L15.5934351,5.37693668 L11.6125457,12.4186189 L9.53471563,12.4186189 L6.83547841,5.85531183 L4.09740325,12.743914 L0.0388379455,12.743914 L4.58287757,1.07156033 L8.25306342,0.0956750299 L11.2047473,6.35282198 L14.1952691,1.09069534 Z M21.36087,3.46343608 C23.9630124,3.02333094 29.8663801,1.64561051 29.8857991,6.94600717 L29.8857991,12.763049 L27.1477239,12.763049 L26.9341152,12.3038088 C26.9341152,12.3038088 25.9825856,13.0118041 23.9241744,13.0118041 C21.6715736,13.0118041 20.4870163,11.4810036 20.4870163,10.0076081 C20.4870163,7.57746237 22.6425222,7.00341219 25.0893128,7.00341219 L26.7981824,7.00341219 C26.7981824,6.00839188 26.1961943,5.64482676 24.9145421,5.66396177 C23.1085776,5.66396177 21.6715736,6.06579689 21.36087,6.16147192 L21.36087,3.46343608 Z M26.8176014,9.12739785 L26.8176014,9.03172282 L25.2058266,9.01258781 C23.9435934,9.01258781 23.3416053,9.20393787 23.3416053,9.83539307 C23.3416053,10.4668483 23.8659175,10.7156033 24.7591903,10.7156033 C26.0990994,10.7156033 26.8176014,10.2372282 26.8176014,9.12739785 Z M96.1821721,4.38191637 C97.1919587,3.42516607 98.415354,2.96592593 99.8911959,2.96592593 C101.367038,2.96592593 102.609852,3.42516607 103.60022,4.38191637 C104.610006,5.31953166 105.095481,6.52503704 105.095481,7.9984325 C105.095481,9.47182796 104.590587,10.6773333 103.60022,11.5958136 C102.609852,12.5142939 101.386457,12.9735341 99.8911959,12.9735341 C98.415354,12.9735341 97.1725397,12.5142939 96.1821721,11.5958136 C95.1918045,10.6581983 94.7063302,9.45269295 94.7063302,7.9984325 C94.7063302,6.52503704 95.1918045,5.31953166 96.1821721,4.38191637 Z M99.8911959,10.1798232 C100.978658,10.1798232 101.871931,9.31874791 101.871931,7.9984325 C101.871931,6.65898208 100.998077,5.7787718 99.8911959,5.7787718 C98.8037334,5.7787718 97.9104607,6.67811708 97.9104607,7.9984325 C97.9298796,9.31874791 98.8037334,10.1798232 99.8911959,10.1798232 Z M90.4147372,2.98506093 C92.6479191,2.98506093 93.5994487,4.1714313 93.5994487,6.25714695 L93.5994487,12.743914 L90.0069388,12.743914 L90.0069388,7.00341219 C90.0069388,6.410227 89.7933301,6.06579689 89.3272747,6.06579689 C88.9000573,6.06579689 88.0650415,6.21887694 87.5407292,6.58244205 L87.5407292,12.763049 L83.9676382,12.763049 L83.9676382,3.17641099 L86.9193221,3.17641099 L87.1135118,3.90354122 C87.696081,3.5208411 89.0748281,3.02333094 90.1622905,2.98506093 C90.2399664,2.98506093 90.3370613,2.98506093 90.4147372,2.98506093 Z M66.9760371,1.09069534 L72.1609028,1.99004062 L72.1609028,13.0118041 L68.3742031,14.2747145 L68.3742031,5.37693668 L64.3738947,12.4186189 L62.3154836,12.4186189 L59.6162464,5.85531183 L56.8781712,12.743914 L52.8196059,12.743914 L57.3636455,1.07156033 L61.0338314,0.0956750299 L63.9855153,6.35282198 L66.9760371,1.09069534 Z M74.122219,3.46343608 C76.7437804,3.02333094 82.6471481,1.64561051 82.6471481,6.94600717 L82.6471481,12.763049 L79.9090729,12.763049 L79.6954642,12.3038088 C79.6954642,12.3038088 78.7439346,13.0118041 76.6855234,13.0118041 C74.4329226,13.0118041 73.2483653,11.4810036 73.2483653,10.0076081 C73.2483653,7.57746237 75.4038712,7.00341219 77.8506618,7.00341219 L79.5595314,7.00341219 C79.5595314,6.00839188 78.9575433,5.64482676 77.6758911,5.66396177 C75.8699266,5.66396177 74.4329226,6.06579689 74.122219,6.16147192 L74.122219,3.46343608 Z M79.5789504,9.12739785 L79.5789504,9.03172282 L77.9671756,9.01258781 C76.7049424,9.01258781 76.1029543,9.20393787 76.1029543,9.83539307 C76.1029543,10.4668483 76.6272665,10.7156033 77.5205393,10.7156033 C78.8604484,10.7156033 79.5789504,10.2372282 79.5789504,9.12739785 Z" />
      </g>
      }
    </g>
  </svg>
);

type propTypes = {
  theme: [
    'color',
    'colorWhite',
    'black',
    'white',
    ],
  mini: boolean,
};

Logo.defaultProps = {
  theme: 'color',
  mini: false,
}

export default Logo;

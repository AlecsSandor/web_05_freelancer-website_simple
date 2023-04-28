const styles = {
  boxWidth: 'xl:max-w-[1280px] w-11/12',
  boxWidthSec: 'xl:max-w-[1280px] w-9/12',

  sectionHeading:
    'flex flex-col text-center mt-24',
  paragraph:
    'text-white sm:text-[17px] text-[15px] letter-spaced mb-10',
  paragraphSubtitle:
    'text-white sm:text-[48px] text-[30px] mb-20 text-gradient font-medium',
  sectionLine:
    'w-[100%] md:w-[70%] h-[3px] bg-gradient-to-r from-gradstart via-gradmid to-accent absolute',
  gradientBg: 
    'bg-gradient-to-r from-gradstart via-gradmid to-accent',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-28 py-20',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',
  paddingB: 'sm:pb-32 pb-30',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',
}

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
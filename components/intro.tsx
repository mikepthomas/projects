import { CMS_NAME } from '../lib/constants';

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between pt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {CMS_NAME}.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Just some things I have planned to do for the next few <s>months</s>{' '}
        <s>years</s> decades...
      </h4>
    </section>
  );
};

export default Intro;

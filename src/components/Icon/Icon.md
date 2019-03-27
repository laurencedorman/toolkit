Icon:

  * Import component icon with props <b>component</b>.
  * You need to import Icon component and IconName.
  * Icon was in SVG.
  * Ask you're MR if you need new icon.
  
  <br />
    
Import example:
```jsx static
import { Icon, IconAcount } from 'ToolkitPath' 

<Icon component={IconAcount} />
```
  
```js
import IconAbTest from './Icons/IconAbTest';
import IconAccount from './Icons/IconAccount';
import IconAlertCircle from './Icons/IconAlertCircle';
import IconAnalyse from './Icons/IconAnalyse';
import IconArrowFullDown from './Icons/IconArrowFullDown';
import IconArrowFullLeft from './Icons/IconArrowFullLeft';
import IconArrowFullRight from './Icons/IconArrowFullRight';
import IconArrowFullUp from './Icons/IconArrowFullUp';
import IconAward from './Icons/IconAward';
import IconBankTransfert from './Icons/IconBankTransfert';
import IconBarredEye from './Icons/IconBarredEye';
import IconBasket from './Icons/IconBasket';
import IconBathTub from './Icons/IconBathTub';
import IconBigDrill from './Icons/IconBigDrill';
import IconBox from './Icons/IconBox';
import IconBoxes from './Icons/IconBoxes';
import IconBrush from './Icons/IconBrush';
import IconBurgerMenu from './Icons/IconBurgerMenu';
import IconCalendar from './Icons/IconCalendar';
import IconCamera from './Icons/IconCamera';
import IconCheck from './Icons/IconCheck';
import IconChevronDown from './Icons/IconChevronDown';
import IconChevronLeft from './Icons/IconChevronLeft';
import IconChevronRight from './Icons/IconChevronRight';
import IconChevronUp from './Icons/IconChevronUp';
import IconCircleMinus from './Icons/IconCircleMinus';
import IconCirclePlus from './Icons/IconCirclePlus';
import IconClock from './Icons/IconClock';
import IconClose from './Icons/IconClose';
import IconCloseCircle from './Icons/IconCloseCircle';
import IconContent from './Icons/IconContent';
import IconCreditCard from './Icons/IconCreditCard';
import IconDeliveryForm from './Icons/IconDeliveryForm';
import IconDocument from './Icons/IconDocument';
import IconDotMenu from './Icons/IconDotMenu';
import IconDownload from './Icons/IconDownload';
import IconDragNdrop from './Icons/IconDragNdrop';
import IconDrill from './Icons/IconDrill';
import IconEdit from './Icons/IconEdit';
import IconExtra from './Icons/IconExtra';
import IconEye from './Icons/IconEye';
import IconFacebook from './Icons/IconFacebook';
import IconFaucetWater from './Icons/IconFaucetWater';
import IconFeatureFlag from './Icons/IconFeatureFlag';
import IconFilter from './Icons/IconFilter';
import IconFlash from './Icons/IconFlash';
import IconFreeDelivery from './Icons/IconFreeDelivery';
import IconHeart from './Icons/IconHeart';
import IconHeartFull from './Icons/IconHeartFull';
import IconHelpCircle from './Icons/IconHelpCircle';
import IconHistoricalSearch from './Icons/IconHistoricalSearch';
import IconHood from './Icons/IconHood';
import IconInformationCircle from './Icons/IconInformationCircle';
import IconInstagram from './Icons/IconInstagram';
import IconLabel from './Icons/IconLabel';
import IconLamp from './Icons/IconLamp';
import IconLaunch from './Icons/IconLaunch';
import IconLink from './Icons/IconLink';
import IconLock from './Icons/IconLock';
import IconLogOut from './Icons/IconLogOut';
import IconMail from './Icons/IconMail';
import IconMapPin from './Icons/IconMapPin';
import IconMarketing from './Icons/IconMarketing';
import IconMessage from './Icons/IconMessage';
import IconMessageCircle from './Icons/IconMessageCircle';
import IconPhone from './Icons/IconPhone';
import IconPiggyBank from './Icons/IconPiggyBank';
import IconPinterest from './Icons/IconPinterest';
import IconPlay from './Icons/IconPlay';
import IconPrinter from './Icons/IconPrinter';
import IconProduct from './Icons/IconProduct';
import IconPromo from './Icons/IconPromo';
import IconScrew from './Icons/IconScrew';
import IconSearch from './Icons/IconSearch';
import IconStarEmpty from './Icons/IconStarEmpty';
import IconStarFull from './Icons/IconStarFull';
import IconStop from './Icons/IconStop';
import IconTagPromo from './Icons/IconTagPromo';
import IconThumbDown from './Icons/IconThumbDown';
import IconTrash from './Icons/IconTrash';
import IconTrending from './Icons/IconTrending';
import IconTrucks from './Icons/IconTrucks';
import IconTwitter from './Icons/IconTwitter';
import IconVote from './Icons/IconVote';
import IconWall from './Icons/IconWall';
import IconWateringCan from './Icons/IconWateringCan';
import IconWheel from './Icons/IconWheel';
import IconYoutube from './Icons/IconYoutube';

const icons = [
  IconAbTest,
  IconAccount, 
  IconAlertCircle,
  IconAnalyse,
  IconArrowFullDown,
  IconArrowFullLeft,
  IconArrowFullRight, 
  IconArrowFullUp,
  IconAward,
  IconBankTransfert,
  IconBarredEye,
  IconBasket,
  IconBathTub,
  IconBigDrill,
  IconBox,
  IconBoxes,
  IconBrush,
  IconBurgerMenu,
  IconCalendar,
  IconCamera,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconCircleMinus,
  IconCirclePlus,
  IconClock,
  IconClose,
  IconCloseCircle,
  IconContent,
  IconCreditCard,
  IconDeliveryForm,
  IconDocument,
  IconDotMenu,
  IconDownload,
  IconDragNdrop,
  IconDrill,
  IconEdit,
  IconExtra,
  IconEye,
  IconFacebook,
  IconFaucetWater,
  IconFeatureFlag,
  IconFilter,
  IconFlash,
  IconFreeDelivery ,
  IconHeart,
  IconHeartFull,
  IconHelpCircle ,
  IconHistoricalSearch,
  IconHood,
  IconInformationCircle,
  IconInstagram,
  IconLabel,
  IconLamp,
  IconLaunch,
  IconLink,
  IconLock,
  IconLogOut,
  IconMail,
  IconMapPin,
  IconMarketing,
  IconMessage,
  IconMessageCircle,
  IconPhone,
  IconPiggyBank,
  IconPinterest,
  IconPlay,
  IconPrinter,
  IconProduct,
  IconPromo,
  IconScrew,
  IconSearch,
  IconStarEmpty,
  IconStarFull,
  IconStop,
  IconTagPromo,
  IconThumbDown,
  IconTrash,
  IconTrending,
  IconTrucks,
  IconTwitter,
  IconVote,
  IconWall,
  IconWateringCan,
  IconWheel,
  IconYoutube,
];

const style = {
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: 140,
  height: 80,
  padding: '.5rem',
  margin: '0 .5rem .5rem 0',
  background: '#e8e8e8',
  border: '1px solid #d4d4d4',
  borderRadius: 3,
};

const span = {
  marginTop: 5,
  fontSize: 12,
  textAlign: 'center',
};

<div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-start'}}>
  {icons.map((icon, id) => (
    <div index={id} style={style}>
      <Icon component={icon} index={id} />
      <span style={span}>{icon.name}</span>
    </div>
  ))}
</div>
```

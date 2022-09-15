import Image from 'next/future/image';
import * as styles from './styles';

interface AboutItemProps {
  image: string;
  name: string;
  role: string;
}

const AboutItem = ({ image, name, role }: AboutItemProps) => (
  <>
    <div css={styles.itemsWrapper1}>
      <Image
        css={styles.avatar}
        style={{ width: '150px', height: '150px' }}
        src={image}
        alt={'avatar image'}
        height={150}
        width={150}
        quality={100}
      />
      <div css={styles.descriptionWrapper}>
        <h3 css={styles.nameStyle}>{name}</h3>
        <h3 css={styles.roleStyle}>{role}</h3>
      </div>
    </div>
  </>
);

export { AboutItem };

// const AboutItem = ({ image, name, role }: AboutItemProps) => (
//   <>
//     <div css={styles.itemsWrapper}>
//       <Image
//         css={styles.avatar}
//         style={{ width: '200px', height: '200px' }}
//         src={image}
//         alt={'avatar image'}
//         height={200}
//         width={200}
//         quality={100}
//       />
//       <div css={styles.descriptionWrapper}>
//         <h3 css={styles.nameStyle}>{name}</h3>
//         <h3 css={styles.roleStyle}>{role}</h3>
//       </div>
//     </div>
//     <br />
//     <div css={styles.line} />
//   </>
// );

// export { AboutItem };

// const AboutItem = ({image, name, role}: AboutItemProps) => (
//     <>
//     <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
//         <Image
//           css={styles.avatar}
//           style={{ width: '200px', height: '200px' }}
//           src={image}
//           alt={'avatar image'}
//           height={200}
//           width={200}
//           quality={100}
//         />
//         <div css={styles.descriptionWrapper}>
//             <h3 css={styles.nameStyle}>{name}</h3>
//             {role}
//         </div>
//         </div>
//     <div css={styles.line}/>
//     </>

//   );

// export { AboutItem };

// const AboutItem = ({image, name, role}: AboutItemProps) => (
//     <div css={styles.wrapper}>
//         <Image
//         css={styles.avatar}
//         style={{ width: '200px', height: '200px' }}
//         src={image}
//         alt={'avatar image'}
//         height={200}
//         width={200}
//         quality={100}
//         />
//         <div css={styles.descriptionWrapper}>
//             <h3 css={styles.nameStyle}>{name}</h3>
//             <h3 css={styles.roleStyle}>{role}</h3>
//         </div>
//     </div>

//   );

// export { AboutItem };

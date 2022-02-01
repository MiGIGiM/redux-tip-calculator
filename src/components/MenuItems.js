import { Stack } from '@twilio-paste/stack';
import MenuItem from './MenuItem';

// export const MenuItems = ({ items }) => {
//   return (
//     <Stack orientation="vertical" spacing="space60">
//       {items.map((item) => (
//         <MenuItem {...item} key={item.uuid} />
//       ))}
//     </Stack>
//   );
// };


const MenuItems = ({ items }) => (
  <Stack orientation="vertical" spacing="space60">
    {items.map((item) => (
      <MenuItem {...item} key={item.uuid} />
    ))}
  </Stack>
)

export default MenuItems; 
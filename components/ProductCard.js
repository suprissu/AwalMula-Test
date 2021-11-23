import { Box, Image, Text } from "@chakra-ui/react";
import { MEDIA_HOST_URL } from "@/Utils/Constants";
import { currencyFormat } from "@/Utils/Helper";

const ProductCard = ({ data }) => (
  <Box
    minWidth="180px"
    maxWidth="180px"
    minHeight="240px"
    padding="1rem"
    backgroundColor="white"
    shadow="md"
    fontSize="14px"
    borderRadius="lg"
    cursor="pointer"
  >
    <Box display="flex" alignItems="center" justifyContent="center">
      <Image
        boxSize="128px"
        src={MEDIA_HOST_URL + data.media_gallery_entries[0].file}
        alt={data.name.toLowerCase().split(" ").join("-")}
      />
    </Box>
    <Text fontWeight="light" wordBreak="break-word">
      {data.name}
    </Text>
    <Text fontWeight="semibold">{currencyFormat(data.price)}</Text>
  </Box>
);

export default ProductCard;
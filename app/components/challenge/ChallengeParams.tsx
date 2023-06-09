import { Stack, SxProps, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  WidgetBox,
  WidgetLink,
  WidgetSeparatorText,
  WidgetText,
  WidgetTitle,
} from "components/styled";
import { BigNumber, ethers } from "ethers";
import { palette } from "theme/palette";
import { getChainNativeCurrencySymbol } from "utils/chains";
import {
  addressToShortAddress,
  bigNumberTimestampToLocaleDateString,
} from "utils/converters";
import { useNetwork } from "wagmi";

/**
 * A component with Quest parameters.
 */
export default function QuestParams(props: {
  id: string;
  createdTimestamp: BigNumber;
  creator: string;
  duration: BigNumber;
  hashtag: string;
  handle: string;
  description: string;
  prize: BigNumber;
  deadline: BigNumber;
  isFinalized: boolean;
  sx?: SxProps;
}) {
  const { chain } = useNetwork();

  return (
    <Box sx={{ width: 1, ...props.sx }}>
      {/* Id */}
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        sx={{ mb: 3 }}
      >
        🏆 Quest #{props.id}
      </Typography>
      <WidgetSeparatorText mb={2}>was started</WidgetSeparatorText>
      {/* Creator */}
      <WidgetBox bgcolor={palette.blue} mb={2}>
        <WidgetTitle>By</WidgetTitle>
        <WidgetLink href={`/accounts/${props.creator.toString()}`}>
          👤 {addressToShortAddress(props.creator.toString())}
        </WidgetLink>
      </WidgetBox>
      <WidgetSeparatorText mb={2}>with</WidgetSeparatorText>
      {/* Description */}
      <WidgetBox bgcolor={palette.purpleLight} mb={2}>
        <WidgetTitle>Description</WidgetTitle>
        <WidgetText>{props.description}</WidgetText>
      </WidgetBox>
      <WidgetSeparatorText mb={2}>and</WidgetSeparatorText>
      {/* Prize */}
      <WidgetBox bgcolor={palette.green} mb={2}>
        <WidgetTitle>Prize Pool</WidgetTitle>
        <Stack direction="row" spacing={1}>
          <WidgetText>{ethers.utils.formatEther(props.prize)}</WidgetText>
          <WidgetText>{getChainNativeCurrencySymbol(chain)}</WidgetText>
        </Stack>
      </WidgetBox>
      <WidgetSeparatorText mb={2}>
        To be shared among the participants who will complete the
        Quest
      </WidgetSeparatorText>
      {/* Deadline */}
      <WidgetBox bgcolor={palette.red} mb={2}>
        <WidgetTitle>By</WidgetTitle>
        <WidgetText>
          {bigNumberTimestampToLocaleDateString(props.deadline)}
        </WidgetText>
      </WidgetBox>
    </Box>
  );
}

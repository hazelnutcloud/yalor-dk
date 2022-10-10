import { getCardFromCode } from "$lib/utils/helpers";
import type { PageLoad } from "./$types";

export const load: PageLoad = async (event) => {
  const cardCode = event.params.code;
  const card = await getCardFromCode(cardCode);

  return {
    card
  }
}
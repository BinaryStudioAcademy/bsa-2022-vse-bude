import type { Request } from 'express';
import type { UserAddressDto } from '@vse-bude/shared';
import {
  HttpStatusCode,
  PLACE,
  ZIP,
  ValidationRanges,
  UserPersonalInfoValidationMessage,
} from '@vse-bude/shared';
import { ProfileError } from '@errors';
import { lang } from '@lang';

export const addressValidation = ({ req }: { req: Request }): void => {
  const { userAddress } = req.body;

  if (userAddress) {
    const { country, region, city, zip, deliveryData }: UserAddressDto =
      userAddress;

    if (country) {
      const isCountry = PLACE.test(country);
      if (!isCountry) {
        throw new ProfileError({
          status: HttpStatusCode.BAD_REQUEST,
          message: lang(UserPersonalInfoValidationMessage.PLACE_NAME),
        });
      }

      if (country.length > ValidationRanges.MAX_COUNTRY_SYMBOLS) {
        throw new ProfileError({
          status: HttpStatusCode.BAD_REQUEST,
          message: lang(UserPersonalInfoValidationMessage.COUNTRY),
        });
      }
    }

    if (region) {
      const isRegion = PLACE.test(region);
      if (!isRegion) {
        throw new ProfileError({
          status: HttpStatusCode.BAD_REQUEST,
          message: lang(UserPersonalInfoValidationMessage.PLACE_NAME),
        });
      }

      if (region.length > ValidationRanges.MAX_REGION_SYMBOLS) {
        throw new ProfileError({
          status: HttpStatusCode.BAD_REQUEST,
          message: lang(UserPersonalInfoValidationMessage.REGION),
        });
      }
    }

    if (city) {
      const isCity = PLACE.test(city);
      if (!isCity) {
        throw new ProfileError({
          status: HttpStatusCode.BAD_REQUEST,
          message: lang(UserPersonalInfoValidationMessage.PLACE_NAME),
        });
      }

      if (city.length > ValidationRanges.MAX_CITY_SYMBOLS) {
        throw new ProfileError({
          status: HttpStatusCode.BAD_REQUEST,
          message: lang(UserPersonalInfoValidationMessage.CITY),
        });
      }
    }

    if (deliveryData) {
      if (deliveryData.length > ValidationRanges.MAX_DELIVERY_DATA) {
        throw new ProfileError({
          status: HttpStatusCode.BAD_REQUEST,
          message: lang(UserPersonalInfoValidationMessage.DELIVERY_DATA),
        });
      }
    }

    if (zip) {
      const isZip = ZIP.test(zip);
      if (!isZip) {
        throw new ProfileError({
          status: HttpStatusCode.BAD_REQUEST,
          message: lang(UserPersonalInfoValidationMessage.ZIP),
        });
      }
    }
  }
};

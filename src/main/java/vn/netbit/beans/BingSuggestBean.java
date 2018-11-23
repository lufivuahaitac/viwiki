/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.beans;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 *
 * @author truongnq
 */
@Getter
@Setter
@Builder
@ToString
public class BingSuggestBean {
//    "label": "Việt Nam, Hà Nội, Hà Nội, Quận Ba Đình, NGÕ 71 Láng Hạ 20",
//    "language": "vi",
//    "countryCode": "VNM",
//    "locationId": "NT_8ApHEqmf47xl-cOValvERC_yAD",
//    "address": {
//        "country": "Việt Nam",
//        "county": "Hà Nội",
//        "city": "Hà Nội",
//        "district": "Quận Ba Đình",
//        "street": "NGÕ 71 Láng Hạ",
//        "houseNumber": "20"
//    },
//    "matchLevel": "houseNumber"
    private String label;
    private String language;
    private String countryCode;
    private String locationId;
    private String matchLevel;
    private BingAddress address;
    
}

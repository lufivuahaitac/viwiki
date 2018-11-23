/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.beans;

import java.util.List;
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
public class BingSuggest {
    private List<BingSuggestBean> suggestions;
}

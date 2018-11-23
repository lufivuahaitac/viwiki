package vn.netbit.beans;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * truongnq
 */

@Getter
@Setter
@ToString
@Builder
public class BaseObject {
    private String code;
    private String message;
}
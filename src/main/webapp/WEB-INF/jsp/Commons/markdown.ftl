<#ftl strip_whitespace = true>

<#assign charset="UTF-8">
<#assign title="Hướng dẫn post form">
<#assign content>
This is content
</#assign>
<!DOCTYPE html>
<html>
    <head>
        <title>${title}</title>
        <meta charset="${charset}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
    <body>
        <table class="wikitable">
            <tbody>
            <tr>
                <th width="100%">Hướng dẫn viết bài</th>
            </tr>
            <tr valign="top">
                <td>
                    <pre>
                    <span class="gu">#</span> Tiêu đề 1

                    <span class="gu">##</span> Tiêu đề 2

                    <span class="gu">###</span> Tiêu đề 3

                    Ngắt đoạn bằng 1 dòng trống

                    Two spaces at the end of a line leave a  
                    line break.

                    Định dạng chữ <span class="ge">_in nghiêng_</span>, <span class="ge">*in nghiêng*</span>, <span class="gs">__in đậm__</span>, <span class="gs">**in đậm**</span>, <span class="sb">`Ghi chú`</span>.

                    

                    ---

                    Danh sách:

                      <span class="k">*</span> apples
                      <span class="k">*</span> oranges
                      <span class="k">*</span> pears

                    hoặc

                      <span class="k">-</span> apples
                      <span class="k">-</span> oranges
                      <span class="k">-</span> pears

                    Đánh số:

                      <span class="k">1.</span> apples
                      <span class="k">2.</span> oranges
                      <span class="k">3.</span> pears

                    A [<span class="nt">link</span>](<span class="na">http://example.com</span>).

                    ![<span class="nt">Image</span>](<span class="na">https://upload.wikimedia.org/wikipedia/commons/f/f0/Image_icon.png</span>)
                    </pre>
                    </div>        
                </td>
            </tr>
            </tbody>
        </table>
    </body>
</html>

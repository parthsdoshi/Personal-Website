import React from "react"
import { InlineImage } from 'react-tinacms-inline';

import styled  from 'styled-components'
import { parse, getUploadDir } from "./common";

const PathedInlineImage = ({name, rawImage, alt, children, previewSrc, blogDataPath, className}) => (
    <div className={className}>
        <InlineImage
            name={name}
            parse={(media) => parse(media, rawImage, blogDataPath)}
            uploadDir={getUploadDir}
            previewSrc={(fieldValue, fieldPath, formValues) => (
                previewSrc(formValues)
            )}
            alt={alt}
            focusRing={{offset: 0}}
        >
            {children}
        </InlineImage>
    </div>
)

const BlogInlineImage = styled(PathedInlineImage)`
    overflow: none;
`

export default BlogInlineImage;
import React from "react"
import { InlineImage } from 'react-tinacms-inline';

import styled  from 'styled-components'

function getRelativeURI(uri1, uri2) {
    // Get from URI1 to URI2
    // Caveats: Probably doesn't handle root dir correctly at all.
    // I think it also requires that the first component is always the same (in this case it's always `src`)

    // Grab components of URI without empty strings
    let uri1_components = uri1.split('/').filter(String)
    let uri2_components = uri2.split('/').filter(String)

    // Below block finds the index of the first different component
    let uri2_idx = 0
    let index, component
    for ([index, component] of uri1_components.entries()) {
        if (uri2_components[uri2_idx] !== component) {
            break
        }
        uri2_idx += 1
    }
    
    // Find the correct amount of `..` needed from uri1.
    let upRoots = Array(uri1_components.length - index - 1).fill('..')
    // Grab the rest of uri2 to append to the `..`'s of above.
    return upRoots.concat(uri2_components.slice(uri2_idx)).join('/')
}

const PathedInlineImage = ({name, rawImage, alt, children, previewSrc, blogDataPath, className}) => (
    <div className={className}>
        <InlineImage
            name={name}
            parse={media => {
                if (!media) {
                    return rawImage
                }
                return media.filename ? getRelativeURI(blogDataPath, media.id) : null
            }}
            uploadDir={blogPost => {
                const postPathParts = blogPost.initialValues.fileRelativePath.split(
                    '/'
                )
                const postDirectory = postPathParts
                    .splice(0, postPathParts.length - 1)
                    .join('/')
                return postDirectory
            }}
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
import React from "react"
import { useCMS } from "tinacms"

// This module allows us to only import react-tinacms-editor if Tina is actually in use.

function DevelopInlineWysiwyg(props) {
    const cms = useCMS()
    const [{ InlineWysiwyg }, setEditor] = React.useState({})

    React.useEffect(() => {
        if (!InlineWysiwyg && cms.enabled) {
            import("react-tinacms-editor").then(setEditor)
        }
    }, [cms.enabled, InlineWysiwyg])

    if (InlineWysiwyg) {
        return <InlineWysiwyg {...props} />
    }

    return props.children
}

export default DevelopInlineWysiwyg
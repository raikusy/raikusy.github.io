import React from "react";
import parse, { domToReact, attributesToProps } from "html-react-parser";
import ScriptTag from "react-script-tag";
import Link from "./link";
import _ from "lodash";

const options = {
  replace: (node) => {
    const props = attributesToProps(node.attribs);
    if (node.type === "script") {
      if (!_.isEmpty(node.children)) {
        return <ScriptTag {...props}>{domToReact(node.children, options)}</ScriptTag>;
      } else {
        return <ScriptTag {...props} />;
      }
    } else if (node.type === "tag" && node.name === "a") {
      const href = props.href;
      const restProps = _.omit(props, "href");
      // use Link only if there are no custom attributes like style, class, and what's not that might break react
      if (_.isEmpty(restProps)) {
        return (
          <Link to={href} {...restProps}>
            {domToReact(node.children, options)}
          </Link>
        );
      }
    }
  },
};

// const convertChildren = (children) => _.map(children, (childNode) => domToReact(childNode, options));

export default function htmlToReact(html) {
  if (!html) {
    return null;
  }
  return parse(html, options);
}

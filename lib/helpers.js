import {Text} from "@chakra-ui/react";

function cutString(string) {
    let str = string;
    let cut = str.split('\n');
    return cut.map((item, index) => (
        <Text key={index}
              sx={{
                  display: 'inline-block',
                  width: '100%'
              }}
        >
            {item}
        </Text>
    ))
}

export {
    cutString
}
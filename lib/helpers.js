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

function isTitle(string, index) {
    let str = string;
    if (str.includes('$$')) {
        return <Text key={index} as="h2" fontWeight={'bold'} fontSize="lg">{str.replace('$$', '')}</Text>
    } else {
        return <Text key={index} as="p" fontSize="normal">{str}</Text>
    }
}

export {
    cutString,
    isTitle
}
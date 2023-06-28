import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import { Product } from '../../../types/home.types'

interface ProductCardProps {
    index: number;
    product: Product;
}

function ProductCard({ index, product }: ProductCardProps) {
    return (
        <Card key={index} maxW='sm' width={"30%"}>
            <CardBody>
                <Image
                    src={product.image}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    w="100%"
                    h="200px"
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{product.title}</Heading>
                    <Text>
                        {product.body}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        ${product.price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}
export default React.memo(ProductCard)
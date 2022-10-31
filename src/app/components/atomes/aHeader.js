import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import {
	Box,
	Flex,
	Text,
	IconButton,
	Stack,
	HStack,
	Collapse,
	Icon,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	Link,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

import { GiMoon } from 'react-icons/gi';
import {BsGithub, BsLinkedin} from "react-icons/bs";

const AHeader = () => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box position={'absolute'} w={"100%"} zIndex={3}>
			<Flex
				bg={useColorModeValue('#f0e7db', 'transparent')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 5, md: 20, lg: 40 }}
				align={'center'}
			>
				<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
					<IconButton
						onClick={onToggle}
						icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>

				<Flex flex={{ base: 1 }} px={{ xl: 100 }} justify={{ base: 'center', md: 'start' }} alignItems={'center'}>
					<Link href="#hero" _hover={{ textDecoration: 'none' }}>
						<HStack>
							<GiMoon />
							<Text
								textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
								fontFamily={'heading'}
								color={useColorModeValue('gray.800', 'white')}
								fontWeight={'bold'}
							>
								HSinp
							</Text>
						</HStack>
					</Link>
					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav navItem={navItem} />
					</Flex>
				</Flex>

				<HStack flex={{ base: 1, md: 0 }} px={{ xl: 100 }} justify={'flex-end'} spacing={0}>
					<Link href="https://www.linkedin.com/in/hugo-sinprasith-1b5367199/" isExternal>
						<IconButton
							aria-label="linkedin"
							variant="ghost"
							size="lg"
							icon={<BsLinkedin size="28px" />}
							_hover={{
								bg: 'rgba(95, 145, 255, 1)',
								color: useColorModeValue('white', 'gray.700'),
							}}
							isRound
						/>
					</Link>
					<Link href="https://github.com/hugosinp" isExternal>
						<IconButton
							aria-label="github"
							variant="ghost"
							size="lg"
							fontSize="3xl"
							icon={<BsGithub />}
							_hover={{
								bg: 'rgba(95, 145, 255, 1)',
								color: useColorModeValue('white', 'gray.700'),
							}}
							isRound
						/>
					</Link>
				</HStack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav navItem={navItem} />
			</Collapse>
		</Box>
	);
};

// Desktop Header Nav
const DesktopNav = ({ navItem }) => {
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const linkHoverColor = useColorModeValue('gray.800', 'white');
	const popoverContentBgColor = useColorModeValue('white', 'gray.800');

	return (
		<HStack spacing={4}>
			{navItem.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={'hover'} placement={'bottom-start'}>
						<PopoverTrigger>
							<Box p={2} fontSize={'sm'} fontWeight={500} color={linkColor}>
								<Link href={navItem.href ?? '#'} _hover={{ textDecoration: 'none', color: linkHoverColor }}>
									{navItem.label}
								</Link>
							</Box>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} minW={'sm'}>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav child={child} key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</HStack>
	);
};

// Desktop Header Nav Item
const DesktopSubNav = ({ child }) => {
	return (
		<Box role={'group'} display={'block'} p={2} rounded={'md'} _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
			<HStack align={'center'}>
				<Box>
					<RouterLink to={child.href ?? '/'}>
						<Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
							{child.label}
						</Text>
						<Text fontSize={'sm'}>{child.subLabel}</Text>
					</RouterLink>
				</Box>
				<Flex
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
					justify={'flex-end'}
					align={'center'}
					flex={1}
				>
					<Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</HStack>
		</Box>
	);
};

// Mobile Header Nav
const MobileNav = ({ navItem }) => {
	return (
		<Stack bg={useColorModeValue('#f0e7db', 'transparent')} p={4} display={{ md: 'none' }}>
			{navItem.map((navItem) => (
				<MobileNavItem navItem={navItem} key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

// Mobile Header Nav Item
const MobileNavItem = ({ navItem }) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={navItem.children && onToggle}>
			<Flex py={2} justify={'space-between'} align={'center'} _hover={{ textDecoration: 'none' }}>
				<Link href={navItem.href ?? '#'}>
					<Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
						{navItem.label}
					</Text>
				</Link>
				{navItem.children && (
					<Icon as={ChevronDownIcon} transition={'all .25s ease-in-out'} transform={isOpen ? 'rotate(180deg)' : ''} w={6} h={6} />
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
				<Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')} align={'start'}>
					{navItem.children &&
						navItem.children.map((child) => (
							<Box key={child.label} py={2}>
								<RouterLink to={navItem.href ?? '/'}>{child.label}</RouterLink>
							</Box>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

const navItem = [
	{
		label: 'Bio',
		href: '#bio',
	},
	{
		label: 'Projects',
		href: '#projects',
	},
	{
		label: 'Experiences',
		href: '#experiences',
	},
	{
		label: 'Contact',
		href: '#contact',
	},
];

export default AHeader;

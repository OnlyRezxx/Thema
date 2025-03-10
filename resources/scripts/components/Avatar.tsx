import React from 'react';
import BoringAvatar, { AvatarProps } from 'boring-avatars';
import { useStoreState } from '@/state/hooks';
import crypto from 'crypto';

const palette = ['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#587291'];

type Props = Omit<AvatarProps, 'colors'>;

const _Avatar = ({ variant = 'beam', ...props }: AvatarProps) => (
    <BoringAvatar colors={palette} variant={variant} {...props} />
);

const _UserAvatar = ({ variant = 'beam', ...props }: Omit<Props, 'name'>) => {
       const uuid = useStoreState((state) => state.user.data?.username);
    const avatar = useStoreState((state) => `https://api.dicebear.com/7.x/pixel-art/svg?seed=cp${uuid}`);

    return <div className="userAvatar" style={{background:'url("'+avatar+'")',backgroundSize:'cover',backgroundPosition:'center'}}></div>;
};

_Avatar.displayName = 'Avatar';
_UserAvatar.displayName = 'Avatar.User';

const Avatar = Object.assign(_Avatar, {
    User: _UserAvatar,
});

export default Avatar;
